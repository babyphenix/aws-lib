
assert = require('assert');
aws = require('../lib/aws');
credentials = require('./credentials');

ec2 = aws.createEC2Client(credentials.accessKeyId, credentials.secretAccessKey);

describe('ec2', function() {
  describe('DescribeInstances', function() {
    it('should return the reservationSet', function(done) {
      ec2.call("DescribeInstances", {}, function(err, res) {
        assert.ok(res.reservationSet);
        done(err)
      })
    })
  })
})