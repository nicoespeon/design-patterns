class Application {
  main() {
    const file = new VideoFile("funny-cats-video.ogg");
    const sourceCodec = CodecFactory.extract(file);
    const destinationCodec = new MPEG4CompressionCodec();
    const buffer = BitrateReader.read("funny-cats-video.ogg", sourceCodec);
    let result = BitrateReader.convert(buffer, destinationCodec);
    result = (new AudioMixer()).fix(result);
    const mp4 = new File(result);
    mp4.save();

    // That's a lot of implementation details from the end-user perspective!
  }
}

// Complex subsystem we need to work with.
class OggCompressionCodec {}

class MPEG4CompressionCodec {}

class CodecFactory {}

class BitrateReader {}

class AudioMixer {}
