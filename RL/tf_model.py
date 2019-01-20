from sklearn.linear_model import LinearRegression
from numpy import genfromtxt
import numpy as np
import tensorflow as tf

def get_regression_model():
	my_data = genfromtxt('regression_data.csv', delimiter=',')
	input_data = my_data[:,0]
	output_data = my_data[:,1]
	return np.reshape(input_data,(input_data.shape[0],1)),np.reshape(output_data,(output_data.shape[0],1))

def get_model():
	# create inputs
	input_ph = tf.placeholder(dtype=tf.float32, shape=[None, 1])
	output_ph = tf.placeholder(dtype=tf.float32, shape=[None, 1])

	# create variables
	W0 = tf.get_variable(name='W0', shape=[1, 20], initializer=tf.contrib.layers.xavier_initializer())
	W1 = tf.get_variable(name='W1', shape=[20, 20], initializer=tf.contrib.layers.xavier_initializer())
	W2 = tf.get_variable(name='W2', shape=[20, 1], initializer=tf.contrib.layers.xavier_initializer())

	b0 = tf.get_variable(name='b0', shape=[20], initializer=tf.constant_initializer(0.))
	b1 = tf.get_variable(name='b1', shape=[20], initializer=tf.constant_initializer(0.))
	b2 = tf.get_variable(name='b2', shape=[1], initializer=tf.constant_initializer(0.))

	weights = [W0, W1, W2]
	biases = [b0, b1, b2]
	activations = [tf.nn.relu, tf.nn.relu, None]

	# create computation graph
	layer = input_ph
	for W, b, activation in zip(weights, biases, activations):
		layer = tf.matmul(layer, W) + b
		if activation is not None:
			layer = activation(layer)
			output_pred = layer

	return input_ph, output_ph, output_pred

def save_model():
	input_ph, output_ph, output_pred = get_model()
	inputs,outputs = get_regression_model()

	mse = tf.reduce_mean(0.5 * tf.square(output_pred - output_ph))

	# create optimizer
	opt = tf.train.AdamOptimizer().minimize(mse)
	
	sess = tf.Session()
	# initialize variables
	sess.run(tf.global_variables_initializer())
	# create saver to save model variables
	saver = tf.train.Saver()

	# run training
	batch_size = 32
	for training_step in range(20000):
	# get a random subset of the training data
		indices = np.random.randint(low=0, high=len(inputs), size=batch_size)
		input_batch = inputs[indices]
		output_batch = outputs[indices]

		# run the optimizer and get the mse
		_, mse_run = sess.run([opt, mse], feed_dict={input_ph: input_batch, output_ph: output_batch})

		# print the mse every so often
		if training_step % 1000 == 0:
			print('{0:04d} mse: {1:.3f}'.format(training_step, mse_run))
			saver.save(sess, 'tmp/model.ckpt')

save_model()
	