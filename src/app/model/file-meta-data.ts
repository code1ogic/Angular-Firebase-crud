export class FileMetaData {
    id : string ='';
    name : string = '';
    size : number = 0;
    file : File;
    url : string = '';

    constructor(file : File) {
      this.file = file;
    }
}
