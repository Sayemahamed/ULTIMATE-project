#include <bits/stdc++.h>
#include "customNode.cpp"
#include "customDataStructure.cpp"
using namespace std;
void creatStructure(binarySearchTree<NodeStructure>&tree,string type, bool all = true){
    string data;
    ifstream ReadFile("C:\\Users\\sayem\\source\\ULTIMATE project\\database\\data.txt");
    getline(ReadFile, data);
    ReadFile.close();
    smatch matchName, matchUrl, matchPrice, matchType, matchGender;
    regex link("<link>(.*?)</link>"), name("<name>(.*?)</name>"), price("<price>(.*?)</price>"), gender("<gender>(.*?)</gender>"), typ("<type>(.*?)</type>");
    while (regex_search(data, matchName, name)){
        string N = matchName.str(1);
        regex_search(data, matchUrl, link);
        string U = matchUrl.str(1);
        regex_search(data, matchPrice, price);
        string P = matchPrice.str(1);
        regex_search(data, matchPrice, typ);
        string T = matchType.str(1);
        regex_search(data, matchGender, gender);
        string G = matchGender.str(1);
        data = matchName.suffix().str();
        if (type == T or all){
            NodeStructure tmp(N, U, P, T, G);
            tree.add(tmp);
        }
    }
}
void addToDataBase(binarySearchTree<NodeStructure>&tree,NodeStructure&N){
    ofstream myFile;
    vector<NodeStructure>data;
    tree.getAll(data);
    data.push_back(N);
    string str="";
    for(auto&no)
    myFile.open ("C:\\Users\\sayem\\source\\ULTIMATE project\\database\\data.txt");
    myFile.close();
    // myFile << "<link>https://images.pexels.com/photos/14410461/pexels-photo-14410461.jpeg?cs=srgb&dl=pexels-jenny-mavimiro-14410461.jpg&fm=jpg&_gl=1*awvqu3*_ga*OTkwODAwMDcuMTY4MTM3NTExMg..*_ga_8JE65Q40S6*MTY4MzU1ODk1Ni40LjEuMTY4MzU1OTA1NC4wLjAuMA..</link>";
}
// int main()
// {

// }