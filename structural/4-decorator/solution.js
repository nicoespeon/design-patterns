class Application {
  main() {
    const source = new FileDataSource("somefile.dat");
    source.writeData(salaryRecords);
    // The target file has been written with plain data.

    const compressedSource = new CompressionDecorator(source);
    compressedSource.writeData(salaryRecords);
    // The target file has been written with compressed data.

    const encryptedSource = new EncryptionDecorator(compressedSource);
    encryptedSource.writeData(salaryRecords);
    // The target file has been written with compressed and encrypted data.

    // We could build the proper file data source behaviour regarding some config.
  }
}

// The class we want to extend. It follows some "DataSource" interface.
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

// Decorators. They follow the same "DataSource" interface.
class DataSourceDecorator {
  // The base decorator simply delegates the work to the wrappee.
  // It's here so we don't have to duplicate the delegation work in all decorators.
  constructor(source) {
    this.wrappee = source;
  }

  writeData(data) {
    this.wrappee.writeData(data);
  }

  readData() {
    return this.wrappee.readData();
  }

  get isValid() {
    return this.wrappee.isValid;
  }
}

class CompressionDecorator extends DataSourceDecorator {
  writeData(data) {
    super.writeData(compress(data));
  }

  readData() {
    const data = super.readData();
    return decompress(data);
  }
}

class EncryptionDecorator extends DataSourceDecorator {
  writeData(data) {
    super.writeData(encrypt(data));
  }

  readData() {
    const data = super.readData();
    return decrypt(data);
  }
}
