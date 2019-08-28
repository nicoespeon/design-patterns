class Application {
  main() {
    const source = new FileDataSource("somefile.dat");
    source.writeData(salaryRecords);
    // The target file has been written with plain data.

    const compressedSource = new FileDataCompressedSource("somefile.dat");
    compressedSource.writeData(salaryRecords);
    // The target file has been written with compressed data.

    const encryptedSource = new FileDataCompressedEncryptedSource("somefile.dat");
    encryptedSource.writeData(salaryRecords);
    // The target file has been written with compressed and encrypted data.

    // OK, we solved this with inheritance.
    // Now, what if we need to encrypt without compressing?
    // What if we need to add another kind of behaviour, but only in some use cases?
  }
}

class FileDataSource {
  constructor(filename) {
    this.filename = filename;
  }

  writeData(data) {
    // Write data to the file.
  }

  readData() {
    // Read data from file.
  }

  get isValid() {
    // Return true if the file is valid.
  }
}

// With current specs, we might decide to extend the base class to add new behaviour.
class FileDataCompressedSource extends FileDataSource {
  writeData(data) {
    super.writeData(compress(data));
  }

  readData() {
    const data = super.readData();
    return decompress(data);
  }
}

class FileDataCompressedEncryptedSource extends FileDataCompressedSource {
  writeData(data) {
    super.writeData(encrypt(data));
  }

  readData() {
    const data = super.readData();
    return decrypt(data);
  }
}

// If we were to create `FileDataEncryptedSource`, we'd probably have some duplication:
class FileDataEncryptedSource extends FileDataSource {
  writeData(data) {
    super.writeData(encrypt(data));
  }

  readData() {
    const data = super.readData();
    return decrypt(data);
  }
}
