#include <iostream>
using namespace std;
#include <cstring>


void wordEdit(char* arr)
{

    char* arrEdit = new char[20]{};
    char* arrEditFor = new char[20]{};
    char* arrNew = new char[40]{};


    cout << "Enter the word to be replaced: " << endl;
    cin.getline(arrEdit,20);


    cout << "What to replace?" ;
    cin.getline(arrEditFor,20);


    for (int i = 0, g = 0; i < strlen(arr); i++)
    {
        int count{};
        if (arr[i] == '\0')
            break;

        for(int j = 0, k = i; j < strlen(arrEdit); j++, k++)
        {
            if(arr[k] == arrEdit[j])
                count++;
        }
        if (count == strlen(arrEdit))
        {
            for (int l = 0; l < strlen(arrEditFor); l++)
            {
                arrNew[g] = arrEditFor[l];
                g++;
                i++;
            }
        }
        else
        {
            arrNew[g] = arr[i];
            g++;
        }

    }
    cout << arrNew << endl;

}

void upper(char* arr)
{
    arr[0] = (int (arr[0] - 32));

    for (int i = 0; i < strlen(arr); i++)
    {

        if(arr[i] == '.' || arr[i] == '!' || arr[i] == '?')
        {
            if(arr[i+ 1] == '\0')
                break;
            arr[i + 1] = (int(arr[i + 1] - 32));
        }

    }
    cout << arr;
}


void numsCount(char* arr)
{
    int k{};
    int* nums = new int [10] {48,49,50,51,52,53,54,55,56,57};
    int* count = new int [10] {};
    for (size_t i = 0; i < strlen(arr); i++)
    {
        if (arr[i] >= 48 && arr[i] <= 57 )
        {
            for (size_t j = 0; j < 10; j++)
            {
                if (nums[j] == arr[i] )
                {
                    count[j]++;
                    break;
                }
            }
        }
    }
    cout << " Count of numbers" << endl;

    while ( k != 10)
    {
        if (count[k] > 0)
        {
            cout << char(nums[k]) << " count is " << count[k] << endl;
        }
        k++;
    }
}

void lettersCount(char* arr)
{
    int k{};
    int* letters = new int [26] {};
    int* count = new int [26] {};
    for (size_t i = 0; i < 26; i++)
    {
        letters[i] = 97 + i;
    }
    for (size_t i = 0; i < strlen(arr); i++)
    {
        if (arr[i] >= 97 && arr[i] <= 122)
        {
            for (size_t j = 0; j < 26; j++)
            {
                if (letters[j] == arr[i])
                {
                    count[j]++;
                    break;
                }
            }
        }
    }
    cout << "Count of letters: " << endl;

    while (k != 26)
    {
        if (count[k] > 0)
        {
            cout << char(letters[k]) << " count is " << count[k] << endl;
        }
        k++;
    }
}
int main()
{
    char* arr = new char [30] {};
    cout << "Enter your text: ";
    cin.getline(arr, 30);
    wordEdit(arr);
    upper(arr);
    lettersCount(arr);
    numsCount(arr);

    return 0;
}