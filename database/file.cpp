#include<bits/stdc++.h>
using namespace std;
void print(string str, regex reg)
{
    smatch match;
    while (regex_search(str, match, reg))
    {
        cout << match[1].str() << endl;
        str = match.suffix().str();
    }
}
int main()
{
    //    ofstream myfile;
    //    myfile.open ("C:\\Users\\sayem\\source\\ULTIMATE project\\database\\example.txt");
    //    myfile << "<link>https://images.pexels.com/photos/14410461/pexels-photo-14410461.jpeg?cs=srgb&dl=pexels-jenny-mavimiro-14410461.jpg&fm=jpg&_gl=1*awvqu3*_ga*OTkwODAwMDcuMTY4MTM3NTExMg..*_ga_8JE65Q40S6*MTY4MzU1ODk1Ni40LjEuMTY4MzU1OTA1NC4wLjAuMA..</link>";
    //    myfile.close();
    string line;
    ifstream myReadFile("C:\\Users\\sayem\\source\\ULTIMATE project\\database\\example.txt");
    getline(myReadFile, line);
    myReadFile.close();
    regex link("<link>(.*?)</link>"), name("<name>(.*?)</name>"), price("<price>(.*?)</price>");
    print(line,name);
}