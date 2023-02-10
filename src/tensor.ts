// Note: you do not need to import @tensorflow/tfjs here.
import '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

export async function run() {
  const img = document.getElementById('img');

  // Load the model.
  const model = await mobilenet.load();

  // Classify the image.
  const predictions = await model.classify(img as HTMLImageElement);

  console.log('Predictions: ');
  console.log(predictions);
}
