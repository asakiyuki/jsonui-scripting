import fs from "fs-extra";

/**
 * Represents a UI texture that can be loaded from a directory.
 * The texture is cached in the '.cached/textures/' directory.
 */
export class UITexture {
    /**
     * Constructs a new instance of the UITexture class.
     * Copies the contents of the specified directory to the cache directory.
     *
     * @param directory_path - The path of the directory containing the texture files.
     */
    constructor(directory_path: string) {
        fs.cpSync(directory_path, '.cached/textures/', { recursive: true });
    }
}