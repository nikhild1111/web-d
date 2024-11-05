const fs = require('fs');
const path = require('path');

const folderPath=path.join(__dirname,'allfile');
// console.log(folderPath);
let jpg=path.join(__dirname,'jpg');
     let png=path.join(__dirname,'png');
     let pdf=path.join(__dirname,'pdf');
     let zip=path.join(__dirname,'zip');
     let txt=path.join(__dirname,'txt');
// const filePath=path.join(folderPath,'example.txt');

fs.readdir(folderPath, (err, files) => {
    if (err) {
        return console.error('Unable to scan folder:', err);
    }

    // Iterate over each file in the directory
    files.forEach((file) => {
        const ext = path.extname(file);  // Get the file extension
    //   console.log("file is"+file)//give all files
     
    if(ext=='.pdf'){
        const sourcePath = path.join(folderPath, file);
        const targetPath = path.join(pdf, file);
        
        // Copy the file instead of moving it
        fs.copyFile(sourcePath, targetPath, (err) => {
            if (err) {
                console.error(`Error appending (copying) file ${file}:`, err);
            } else {
                console.log(`Appended (copied) file: ${file}`);
            }
        });
    
    }
   else if(ext=='.zip'){
        const sourcePath = path.join(folderPath, file);
        const targetPath = path.join(zip, file);
        
        // Copy the file instead of moving it
        fs.copyFile(sourcePath, targetPath, (err) => {
            if (err) {
                console.error(`Error appending (copying) file ${file}:`, err);
            } else {
                console.log(`Appended (copied) file: ${file}`);
            }
        });
    
    }
  else  if(ext=='.txt'){
        const sourcePath = path.join(folderPath, file);
        const targetPath = path.join(txt, file);
        
        // Copy the file instead of moving it
        fs.copyFile(sourcePath, targetPath, (err) => {
            if (err) {
                console.error(`Error appending (copying) file ${file}:`, err);
            } else {
                console.log(`Appended (copied) file: ${file}`);
            }
        });
    
    }
   else if(ext=='.png'){
        const sourcePath = path.join(folderPath, file);
        const targetPath = path.join(png, file);
        
        // Copy the file instead of moving it
        fs.copyFile(sourcePath, targetPath, (err) => {
            if (err) {
                console.error(`Error appending (copying) file ${file}:`, err);
            } else {
                console.log(`Appended (copied) file: ${file}`);
            }
        });
    
    }
    else if(ext=='.jpg'){
        const sourcePath = path.join(folderPath, file);
        const targetPath = path.join(jpg, file);
        
        // Copy the file instead of moving it
        fs.copyFile(sourcePath, targetPath, (err) => {
            if (err) {
                console.error(`Error appending (copying) file ${file}:`, err);
            } else {
                console.log(`Appended (copied) file: ${file}`);
            }
        });
    
    }
    
    // if (supportedExtensions.includes(ext)) {
        //     console.log(`Processing file: ${file} (Extension: ${ext})`);
        //     // You can now do further processing with each file, like reading the content, etc.
        // }
    });
});



// if (!fs.existsSync(folderPath)) {
//     fs.mkdirSync(folderPath, { recursive: true });
// }
// const data = 'This is the content to append to the file.\n';
// fs.appendFile(filePath, data, (err) => {
//     if (err) {
//         console.error('Error appending to the file:', err);
//     } else {
//         console.log('Data successfully appended to the file!');
//     }
// });

//*******************************see this code  */

// https://chatgpt.com/c/66ffe79b-359c-8000-8a91-38eb14b98370

// const fs = require('fs');
// const path = require('path');

// // Define the folder path
// const folderPath = path.join(__dirname, 'your-folder');  // Replace 'your-folder' with your actual folder

// // Supported file extensions
// const supportedExtensions = ['.pdf', '.jpg', '.png'];

// // Read the directory
// fs.readdir(folderPath, (err, files) => {
//     if (err) {
//         return console.error('Unable to scan folder:', err);
//     }

//     // Iterate over each file in the directory
//     files.forEach((file) => {
//         const ext = path.extname(file);  // Get the file extension
//         if (supportedExtensions.includes(ext)) {
//             console.log(`Processing file: ${file} (Extension: ${ext})`);
//             // You can now do further processing with each file, like reading the content, etc.
//         }
//     });
// });

// const fs = require('fs');
// const path = require('path');

// // Define the folder and file paths
// const folderPath = path.join(__dirname, 'your-folder');  // Replace 'your-folder' with the folder name
// const filePath = path.join(folderPath, 'example.txt');   // File name where content will be appended

// // The data to append
// const data = 'This is the content to append to the file.\n';

// // Check if the folder exists, if not, create it
// if (!fs.existsSync(folderPath)) {
//     fs.mkdirSync(folderPath, { recursive: true });
//     console.log(`Folder '${folderPath}' created.`);
// }

// // Append the data to the file
// fs.appendFile(filePath, data, (err) => {
//     if (err) {
//         console.error('Error appending to the file:', err);
//     } else {
//         console.log('Data successfully appended to the file!');
//     }
// });

// const fs = require('fs');
// const folderPath = './your-folder';  // Path to your folder

// // Reading the directory asynchronously
// fs.readdir(folderPath, (err, files) => {
//     if (err) {
//         console.error('Error reading directory:', err); // Handles error if folder can't be read
//         return;
//     }

//     // Iterate over the files array
//     files.forEach(file => {
//         console.log(file); // Logs each file or folder name found inside the directory
//     });
// });

//*********move the file */

// // const fs = require('fs');
// const path = require('path');

// // Define the source folder and target folder
// const sourceFolder = path.join(__dirname, 'source-folder');  // Replace 'source-folder' with your actual source folder
// const targetFolder = path.join(__dirname, 'target-folder');  // Replace 'target-folder' with your target folder

// // Ensure the target folder exists or create it
// if (!fs.existsSync(targetFolder)) {
//     fs.mkdirSync(targetFolder, { recursive: true });
//     console.log(`Created target folder: ${targetFolder}`);
// }

// // Function to append (move) files to the target folder
// function appendFile(file) {
//     const sourcePath = path.join(sourceFolder, file);  // File in the source folder
//     const targetPath = path.join(targetFolder, file);  // File destination in the target folder
    
//     // Move the file from source to target
//     fs.rename(sourcePath, targetPath, (err) => {
//         if (err) {
//             console.error(`Error appending file ${file}:`, err);
//         } else {
//             console.log(`Appended file: ${file}`);
//         }
//     });
// }

// // Read the source folder to get the list of files
// fs.readdir(sourceFolder, (err, files) => {
//     if (err) {
//         console.error('Unable to scan source folder:', err);
//         return;
//     }

//     // Iterate over each file in the source folder
//     files.forEach((file) => {
//         // Append (move) the file to the target folder
//         appendFile(file);
//     });
// });
