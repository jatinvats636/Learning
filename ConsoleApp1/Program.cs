using System;

namespace MyApplication
{
    class Program
    {
        enum Days { Sun ,Mon=5, Tue, Wed, Thu=10, Fri, Sat };
        static void Main(string[] args)
        {
            //double numDouble = 1.534567;
            //int numInt = (int)numDouble;
            //Console.WriteLine("Original double Value: " + numDouble);
            //Console.WriteLine("Converted int Value: " + numInt);

            //try
            //{
            //    Console.Write("Enter a string : ");
            //    string s = Console.ReadLine();
            //    int i = Convert.ToInt32(s);
            //    int j = int.Parse(s);
            //    Console.WriteLine("{0},{1}", i, j);
            //}
            //catch (Exception)
            //{
            //    Console.WriteLine("\n\nCan't convert the provided string !!!");
            //}

            //int[] nums = {1,2,3,4,5};
            //nums[0] = 1;
            //nums[1] = 2;
            //nums[2] = 3;
            //Console.WriteLine(nums[2] + " & " + nums[3]);

            //var nm = new string[3] {"jatin","kumar","vats"};
            //Console.WriteLine(string.Join(" ",nm));

            //String nm = string.Format("{1} {0}", "jatin", "vats");
            //Console.WriteLine(nm);

            //string path1 = "D:\\Learning\\C#\\.vs\\C#\\v16";
            //string path2 = @"D:\Learning\C#\.vs\C#\v16";
            //Console.WriteLine("path1:{0}\npath2:{1}",path1,path2);

            //Console.WriteLine("Sun: {0}\nMon: {1}\nTue: {2}\nThu: {3}\nFri: {4}", (int)Days.Sun, (int)Days.Mon, (int)Days.Tue, (int)Days.Thu, (int)Days.Fri);
            //Console.WriteLine((Days)5);

            //// Instantiate random number generator using system-supplied value as seed.
            //var rand = new Random();

            //// Generate and display 5 random byte (integer) values.
            //var bytes = new byte[5];
            //rand.NextBytes(bytes);
            //Console.WriteLine("Five random byte values:");
            //foreach (byte byteValue in bytes)
            //    Console.Write("{0, 5}", byteValue);
            //Console.WriteLine();

            //// Generate and display 5 random integers.
            //Console.WriteLine("Five random integer values:");
            //for (int ctr = 0; ctr < 5; ctr++)
            //    Console.Write("{0,15:N0}", rand.Next());
            //Console.WriteLine();

            //// Generate and display 5 random integers between 0 and 100.
            //Console.WriteLine("Five random integers between 0 and 100:");
            //for (int ctr = 0; ctr <= 4; ctr++)
            //    Console.Write("{0,8:N0}", rand.Next(101));
            //Console.WriteLine();

            //// Generate and display 5 random integers from 50 to 100.
            //Console.WriteLine("Five random integers between 50 and 100:");
            //for (int ctr = 0; ctr <= 4; ctr++)
            //    Console.Write("{0,8:N0}", rand.Next(50, 101));
            //Console.WriteLine();

            //// Generate and display 5 random floating point values from 0 to 1.
            //Console.WriteLine("Five Doubles.");
            //for (int ctr = 0; ctr <= 4; ctr++)
            //    Console.Write("{0,8:N3}", rand.NextDouble());
            //Console.WriteLine();

            //// Generate and display 5 random floating point values from 0 to 5.
            //Console.WriteLine("Five Doubles between 0 and 5.");
            //for (int ctr = 0; ctr <= 4; ctr++)
            //    Console.Write("{0,8:N3}", rand.NextDouble() * 5);

            //// The example displays output like the following:
            ////    Five random byte values:
            ////      194  185  239   54  116
            ////    Five random integer values:
            ////        507,353,531  1,509,532,693  2,125,074,958  1,409,512,757    652,767,128
            ////    Five random integers between 0 and 100:
            ////          16      78      94      79      52
            ////    Five random integers between 50 and 100:
            ////          56      66      96      60      65
            ////    Five Doubles.
            ////       0.943   0.108   0.744   0.563   0.415
            ////    Five Doubles between 0 and 5.
            ////       2.934   3.130   0.292   1.432   4.369



            //var arr = new char[10] { 'a', 'a', 'c', 'd', 'a', 'e', 'r', 'c', 'e', 'f' };
            //var count = new int[10];
            //for (var i = 0; i < arr.Length; i++)
            //{
            //    int c = 0;
            //    for (var j = 0; j < arr.Length; j++)
            //    {
            //        if (arr[i] == arr[j])
            //            count[i]++;
            //    }
            //    Console.WriteLine("{0} occured {1} times.", arr[i], count[i]);
            //}

            //int[] arr = { 1, 2, 3, 4, 5 };
            //Console.WriteLine(Array.IndexOf(arr,5));

        }
    }
}