#include <bits/stdc++.h>
#include "fileSys.cpp"
#include "customNode.cpp"
#include "customDataStructure.cpp"
using namespace std;

int main(int argc, char *argv[])
{
    binarySearchTree<NodeStructure> dataBaseTree;
    creatTree(dataBaseTree);
    string order=argv[1];
    if (order == "start")
    {
        string str="[";
        vector<NodeStructure> v;
        dataBaseTree.getAll(v);
        for(long long i=0; i<v.size(); i++){
            str+="{\"name\":\""+v[i].name+"\",\"url\":\""+v[i].url+"\",\"price\":"+v[i].price+",\"type\":\""+v[i].type+"\",\"gender\":\""+v[i].gender+"\"}";
            if(i!=v.size()-1)
            str+=",";
        }
        str+="]";
        cout<<str;
    }
    else if(order=="add"){
        string name = argv[2],url = argv[3],price = argv[4],type = argv[5],gender =argv[6];
        NodeStructure newNode(name,url,price,type,gender);
        addToDataBase(dataBaseTree,newNode);
    }
    else if(order=="type"){
        vector<NodeStructure> v;
        string str="";
        str+="[";
        dataBaseTree.getRelated(v,argv[2]);
        for(long long i=0; i<v.size(); i++){
            str+="{\"name\":\""+v[i].name+"\",\"url\":\""+v[i].url+"\",\"price\":"+v[i].price+",\"type\":\""+v[i].type+"\",\"gender\":\""+v[i].gender+"\"}";
            if(i!=v.size()-1)
            str+=",";
        }
        str+="]";
        cout<<str;
    }
}
// [{"name":"sayem","url":"https://","price":10,"type":"sell","gender":"male"},{}]