#include <bits/stdc++.h>
#include "customNode.cpp"
#include "customDataStructure.cpp"
using namespace std;
void creatTree(binarySearchTree<NodeStructure>&tree){
    string data,data1,data2,data3,data4;
    ifstream ReadFile("C:\\Users\\sayem\\source\\ULTIMATE project\\database\\data.txt");
    getline(ReadFile, data);
    ReadFile.close();
    data4=data3=data2=data1=data;
    smatch matchName, matchUrl, matchPrice, matchType, matchGender;
    regex link("<link>(.*?)</link>"), name("<name>(.*?)</name>"), price("<price>(.*?)</price>"), gender("<gender>(.*?)</gender>"), typ("<type>(.*?)</type>");
    while (regex_search(data, matchName, name)){
        string N = matchName.str(1);
        regex_search(data1, matchUrl, link);
        string U = matchUrl.str(1);
        regex_search(data2, matchPrice, price);
        string P = matchPrice.str(1);
        regex_search(data3, matchType, typ);
        string T = matchType.str(1);
        regex_search(data4, matchGender, gender);
        string G = matchGender.str(1);
        data = matchName.suffix().str();
        data1 = matchUrl.suffix().str();
        data2= matchPrice.suffix().str();
        data3= matchType.suffix().str();
        data4 =matchGender.suffix().str();
        NodeStructure tmp(N, U, P, T, G);
        tree.add(tmp);
    }
}
void addToDataBase(binarySearchTree<NodeStructure>&tree,NodeStructure&N){
    ofstream myFile;
    vector<NodeStructure>data;
    tree.getAll(data);
    data.push_back(N);
    string str="";
    for(auto&node:data){
        str+="<name>"+node.name+"</name>";
        str+="<link>"+node.url+"</link>";
        str+="<price>"+node.price+"</price>";
        str+="<type>"+node.type+"</type>";
        str+="<gender>"+node.gender+"</gender>";
    }
    myFile.open ("C:\\Users\\sayem\\source\\ULTIMATE project\\database\\data.txt");
    myFile <<str;
    myFile.close();
}