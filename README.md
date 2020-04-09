# ALGORITHMS
## Sorting
1. Merge sort
 - Method 1 - divide into 2 arrays and call itself for each other
```c#
static int[] Splits(int[] arr)
{
    if (arr.Length == 1)
    {
        return arr;
    }

    int middle = arr.Length / 2;
    int[] leftArr = new int[middle];
    int[] rightArr = new int[arr.Length - middle];

    for (int i = 0; i < middle; i++)
    {
        leftArr[i] = arr[i];
    }

    for (int i = middle, j = 0; i < arr.Length; i++, j++)
    {
        rightArr[j] = arr[i];
    }

    leftArr = Splits(leftArr);
    rightArr = Splits(rightArr);

    return Merge(leftArr, rightArr);
}
```
 - Method 2 - merge arrays
 ```c#
 static int[] Merge(int[] left, int[] right)
{
    int leftIncrease = 0;
    int rightIncrease = 0;
    int[] arr = new int[left.Length + right.Length];
    for (int i = 0; i < arr.Length; i++)
    {
        if (rightIncrease == right.Length || ((leftIncrease < left.Length) && (left[leftIncrease] <= right[rightIncrease])))
        {
            arr[i] = left[leftIncrease];
            leftIncrease++;
        }
        else if (leftIncrease== left.Length || ((rightIncrease < right.Length)&&(left[leftIncrease] >= right[rightIncrease])))
        {
            arr[i] = right[rightIncrease];
            rightIncrease++;
        }
     }
     return arr;
}
 ```