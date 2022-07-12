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
        }
    }
}