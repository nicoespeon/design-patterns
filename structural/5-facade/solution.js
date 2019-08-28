class Application {
  main() {
    const convertor = new VideoConverter();
    const mp4 = convertor.convert("funny-cats-video.ogg", "mp4");
    mp4.save();
  }
}

// The Facade.
class VideoConverter {
  convert(filename, format) {
    const file = new VideoFile(filename);
    const sourceCodec = CodecFactory.extract(file);
    const destinationCodec = format === "mp4" ? new MPEG4CompressionCodec() : new OggCompressionCodec();
    const buffer = BitrateReader.read(filename, sourceCodec);
    let result = BitrateReader.convert(buffer, destinationCodec);
    result = (new AudioMixer()).fix(result);
    return new File(result);
  }
}

// Complex subsystem we need to work with.
class OggCompressionCodec {}

class MPEG4CompressionCodec {}

class CodecFactory {}

class BitrateReader {}

class AudioMixer {}
