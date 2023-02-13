const fs = require('fs');
const path = require('path');

const lib = {};

lib.baseFile = path.join(__dirname, '/../data/');

lib.createFile = (dir, file, data, callback) => {
    // write data to files
    fs.open(`${lib.baseFile + dir}/${file}.json`, 'wx', (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            const stringData = JSON.stringify(data);
            fs.writeFile(fileDescriptor, stringData, (err2) => {
                if (!err2) {
                    fs.close(fileDescriptor, (err3) => {
                        if (err3) {
                            callback(false);
                        } else {
                            callback('Error when closing the new file!');
                        }
                    });
                } else {
                    callback('Error when writing a new file.');
                }
            });
        } else {
            callback('Could not create new file. It may already exist');
        }
    });
};
// read files

lib.readFile = (dir, file, callback) => {
    fs.readFile(`${lib.baseFile + dir}/${file}.json`, 'utf-8', (err, data) => {
        callback(err, data);
    });
};

// Update files

lib.updateFile = (dir, file, data, callback) => {
    fs.open(`${lib.baseFile + dir}/${file}.json`, 'r+', (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            const stringData = JSON.stringify(data);
            fs.ftruncate(fileDescriptor, (err2) => {
                if (!err2) {
                    fs.writeFile(fileDescriptor, stringData, (err3) => {
                        if (!err3) {
                            fs.close(fileDescriptor, (err4) => {
                                if (!err4) {
                                    callback(false);
                                } else {
                                    callback('Error while closing the file');
                                }
                            });
                        } else {
                            callback('Error while updating the file data');
                        }
                    });
                } else {
                    callback('Error while deleting file data');
                }
            });
        } else {
            callback('Error while opening files. It maybe not exist');
        }
    });
};

// delete file
lib.deleteFile = (dir, file, callback) => {
    fs.unlink(`${lib.baseFile + dir}/${file}.json`, (err) => {
        if (!err) {
            callback('File Delete Successfully');
        } else {
            callback('Error while deleting file');
        }
    });
};

module.exports = lib;
