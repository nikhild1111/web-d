import fs from "fs/promises";
import fsn from "fs";
import path from "path";
async function over(){



const basepath = "C:\Users\domad\OneDrive\Documents\Desktop\allcode\web d\video93ex-15sol";

let files = await fs.readdir(basepath);

for (const item of files) {
    console.log("running for ", item);
    let ext = item.split(".")[item.split(".").length - 1];
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {

        if (fsn.existsSync(path.join(basepath, ext))) {
            await fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
        } else {
            await fs.mkdir(path.join(basepath, ext), { recursive: true });
            await fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
        }
    }
}
}
over();