import Queue from 'bull';

const testQueue = new Queue('test-queue', 'redis://127.0.0.1:6379');

testQueue.process(100, async (job) => {
  console.log(job);
  return;
});

for(let i = 0; i< 1000; i++ ) {
  testQueue.add({ some: 'payload' }, { removeOnComplete: true, removeOnFail: false});
}
