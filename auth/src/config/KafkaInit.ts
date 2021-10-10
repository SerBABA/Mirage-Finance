import { Consumer, KafkaClient, KeyedMessage, Producer } from "kafka-node";

const kafkaClient = new KafkaClient({
  kafkaHost: "localhost:9092",
});

export enum kafkaTopics {
  test = "test",
}

export class KafkaHandler {
  producer: Producer;
  consumer: Consumer;

  constructor() {
    this.producer = new Producer(kafkaClient);
    this.consumer = new Consumer(kafkaClient, [{ topic: kafkaTopics.test }], {});

    this.consumer.on("message", (message) => {
      console.log(message);
    });
  }

  /**
   * disconnects from the Kafka service.
   */
  async cleanup() {
    this.producer.close();
    this.consumer.close(() => {});
  }

  /**
   * Produces an event for a given topic that contains the provided message.
   *
   * @param topic The Kafka topic the message relates to.
   * @param message The message for the Kafka topic.
   */
  produce(topic: kafkaTopics, key: string, message: string) {
    const keyedMessage = new KeyedMessage(key, message);
    const payload = [{ topic, messages: [keyedMessage] }];
    this.producer.send(payload, (err) => {
      console.log(err);
    });
  }
}
