using System;

namespace MyApplication
{
    class Program
    {
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

            //string nm = string.Format("{0} {1}", "jatin", "vats");
            //Console.WriteLine(nm);

            string path1 = "D:\\Learning\\C#\\.vs\\C#\\v16";
            string path2 = @"D:\Learning\C#\.vs\C#\v16";
            Console.WriteLine("path1:{0}\npath2:{1}",path1,path2);
        }
    }
}