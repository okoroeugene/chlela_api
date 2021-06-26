import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
    original_file: {
        type: String,
        required: true,
    },
    edited_file: {
        type: String,
        required: true,
    },
})

const File = mongoose.model('File', fileSchema);

export { File };