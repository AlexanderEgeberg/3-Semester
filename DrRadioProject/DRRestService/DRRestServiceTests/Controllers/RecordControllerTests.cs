using DRRestService.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using modelLib.models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DRRestService.Controllers.Tests
{
    [TestClass()]
    public class RecordControllerTests
    {
        public RecordController record;

        [TestInitialize]
        public void TestInitialize()
        {
            record = new RecordController();
        }

        [TestMethod()]
        public void GetTest()
        {
            var test = record.Get();
            int counter = 0;
            foreach (var i in test)
            {
                Assert.AreEqual(i,RecordController.records[counter]);
                counter++;

            }
        }

        [TestMethod()]
        public void GetTest1()
        {
            int counter = 0;
            foreach (var i in RecordController.records)
            {
                Assert.AreEqual(record.Get(counter), RecordController.records.Find(i => i.Id == counter));
                counter++;
            }
        }

        [TestMethod()]
        public void PostTest()
        {
            Record testElement = new Record(2, "test", "test", 100, 200);
            record.Post(testElement);

            Assert.AreEqual(record.Get(2),testElement);
        }

        [TestMethod()]
        public void PutTest()
        {
            Record testElement = new Record(1, "tesxDt", "texDst", 1020, 2010);
            record.Put(1, testElement);
            Record ActualTest = record.Get((1));
            Assert.AreEqual(ActualTest, testElement);
        }

        [TestMethod()]
        public void DeleteTest()
        {
            record.Delete(0);
            Assert.IsNull(record.Get(0));
        }
    }
}