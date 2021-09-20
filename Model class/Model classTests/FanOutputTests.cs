using Microsoft.VisualStudio.TestTools.UnitTesting;
using Model_class;
using System;
using System.Collections.Generic;
using System.Text;

namespace Model_class.Tests
{
    [TestClass()]
    public class FanOutputTests
    {
        private FanOutput _test;

        [TestInitialize]
        // Initializes a working object
        public void BeforeTest()
        {
            _test = new FanOutput(0,"test",20,50);
        }

        [TestMethod()]
        // Tests if the name meets the requirement of at least 2 characters
        public void nameTest()
        {
            Assert.AreEqual("test",_test.Name);
            _test.Name = "success";
            Assert.AreEqual("success",_test.Name);


            // Tests if checkName function catches an intentional error
            try
            {
                _test.Name = "f";
                Assert.Fail();

            }
            catch (Exception e)
            {
                Assert.AreEqual("Name must contain at least 2 characters",e.Message);
            }
        }

        [TestMethod()]
        // Tests if the temp meets the requirement of being between 15 & 25
        public void tempTest()
        {
            Assert.AreEqual(20, _test.Temp);
            _test.Temp = 21;
            Assert.AreEqual(21, _test.Temp);

            // Tests if checkTemp function catches an intentional error
            try
            {
                _test.Temp = 500;
                Assert.Fail();

            }
            catch (Exception e)
            {
                Assert.AreEqual("Temp must be between 15 and 25", e.Message);
            }
        }

        [TestMethod()]
        // Tests if the fugt meets the requirement of being between 30 & 80
        public void fugtTest()
        {
            Assert.AreEqual(50, _test.Fugt);
            _test.Fugt = 60;
            Assert.AreEqual(60, _test.Fugt);

            // Tests if checkFugt function catches an intentional error
            try
            {
                _test.Fugt = 10;
                Assert.Fail();

            }
            catch (Exception e)
            {
                Assert.AreEqual("Fugt must be between 30 and 80", e.Message);
            }
        }
    }
}