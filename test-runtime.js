const { init, captureException } = require('@autter/runtime-node');

// Initialize Autter Runtime SDK
init({
  apiKey: process.env.AUTTER_RUNTIME_KEY,
  serviceName: 'autter-demo-nextjs-saas',
  environment: 'development',
});

async function triggerEvent() {
  console.log('Sending test telemetry error to Autter Runtime...');
  try {
    throw new Error('Test Runtime Exception: Billing webhook signature verification signal');
  } catch (err) {
    captureException(err);
    console.log('✓ Error captured successfully!');
  }

  // Allow open connections to flush to Autter ingest servers
  setTimeout(() => {
    console.log('Telemetry batch flushed.');
    process.exit(0);
  }, 3000);
}

triggerEvent();
