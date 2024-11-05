#include <iostream>
using namespace std;
int main()
{
    //     int a=123;

    // //    char a='d';||int a=2; wromg variable name does not same
    //      a=20.7;
    //       cout<<a<<endl;

    //     char b='v';
    //     // char c='ab'; //store only one charector inside char function
    //     cout<<b<<endl;

    //     bool b1=true;
    //     cout<<b1<<endl;

    // float f=1.2;
    //  cout<<f<<endl;

    //     double d=1.23;
    //     cout<<d<<endl;

    //     int size=sizeof(d);
    //     cout<<"Size of a is "<<size<<endl;

    // type casting
    // int a='a';
    // char b=98;
    // cout<<a<<'\n'<<b;

    // int a=-5;
    // cout<<a<<endl;

    // unsigned int a = 55;
    // cout << a << endl;

    // unsigned int a = -55;
    
    // cout << a << endl;
    //wrong first compiler take its 2's complement then 
    // then it go to computer the n again it come to display but we write unsined 
    // so even tho the first bit is 1 thet is -ve it consider it as +ve and display 
    // large value


// int a=2/5;
//     cout << a << endl;
// ans =0;


// int a=2.0/5;
//     cout << a << endl;
    // its answer is also 0 becuse we store float insid int so it write int

    // float a=2.0/5;
    // cout << a << endl;
    //write

// relational operator
int a=2;
int b=3;

bool s=(a!=b);
cout<<s<<endl;
bool e=(a==b);
cout<<e<<endl;
bool t=(a>=b);
cout<<t<<endl;
bool y=(a<=b);
cout<<y<<endl;
bool o=(a>b);
cout<<o<<endl;
bool p=(a<b);
cout<<p<<endl;
}
