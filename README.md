# Stirdie JavaScript SDK

Stirdie is a secure messaging platform. Use this SDK to connect to Stirdie and send and receive files securely.

## Installation

    npm install stirdie-javascript-sdk

## Quick Example

```javascript
import { Stirdie } from 'stirdie-javascript-sdk';
// OR const connect = require('stirdie-javascript-sdk');

Stirdie(
    {
        idToken: `ID_TOKEN`,
        refreshToken: `REFRESH_TOKEN`,
    },
    null,
    function (err, stirdie) {
        // Upload
        stirdie.storage.upload([event.target.files[0]], 0, function (error, upload) {
            if (error) {
                console.error(error);
                return;
            }

            upload.onFinish(function () {
                console.log('Upload Complete!');
            });
            upload.onError(function (error) {
                console.error('Error uploading!', error);
            });

            upload.start(function (uploadError) {
                if (uploadError) {
                    console.error(uploadError);
                    return;
                }

                console.log('Upload started!');
            });
        });
    }
);
```

## Documentation

### Connecting

Use the `Stirdie.connect` function to pass your credentials in to initialize Stirdie and get the stirdie object.

```javascript
Stirdie(
    {
        idToken: `ID_TOKEN`,
        refreshToken: `REFRESH_TOKEN`,
    },
    null,
    function (err, stirdie) {
        // Ready
    }
);
```

### Configuration

The second parameter for the `connect` function is the configuration object. Use this to override the default settings.

### Stirdie Cloud Storage

#### Uploading

```javascript
stirdie.storage.upload(
    files, // Array of File
    folderID, // FolderID to upload into
    function (error, upload) {
        // Start upload
        upload.start(function () {
            // Started!
        });
    }
);
```

#### Downloading

```javascript
stirdie.storage.download(
    fileId, // ID of file to download
    function (error, content) {
        console.log(content); // Contents of decrypted file
    }
);
```

### Stirdie Secure File Transfer

#### Sending

```javascript
stirdie.transfer.send(
    files, // Array of File
    stirdieID, // Stirdie ID to send file to
    function (error, upload) {
        // Start upload
        upload.start(function () {
            // Started!
        });
    }
);
```

#### Retrieve Received File

```javascript
stirdie.transfer.retrieve(
    transferID, // ID of received file transfer
    function (error, content) {
        console.log(content); // Contents of decrypted files
    }
);
```
