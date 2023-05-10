#ifndef customNode
#define customNode
#include<bits/stdc++.h>
using namespace std;
//Start of Node structure
struct NodeStructure{
    string name,url,price,type,gender;
    NodeStructure(string name,string url,string price,string type,string gender){
        this->name = name;
        this->url = url;
        this->price=price;
        this->type = type;
        this->gender = gender;
    }
    NodeStructure(){name = ""; url = "";price=""; type = ""; gender = "";}
    void operator = (NodeStructure const &obj){
        name = obj.name;
        url = obj.url;
        price=obj.price;
        type=obj.type;
        gender=obj.gender;
    }
    bool operator > (NodeStructure const& obj){
        return type>obj.type;
    }
    bool operator < (NodeStructure const& obj){
        return type<obj.type;
    }
    bool operator <=(NodeStructure const& obj){
        return type<=obj.type;
    }
    bool operator == (NodeStructure const &obj) {
        return type == obj.type;
    }
};
//End of Node structure
# endif 