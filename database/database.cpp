#include <bits/stdc++.h>
using namespace std;
//Start of Node structure
struct NodeStructure{
    string name,url,type,gender;
    NodeStructure(string name,string url,string type,string gender){
        this->name = name;
        this->url = url;
        this->type = type;
        this->gender = gender;
    }
    NodeStructure(){name = ""; url = ""; type = ""; gender = "";}
    void operator = (NodeStructure const &obj){
        name = obj.name;
        url = obj.url;
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


// Start Generic Node Class
template <typename T>
class Node
{
public:
    T data;
    Node<T> *BiggerNodePoint, *SmallerNodePoint;
    Node(){};
    Node(T data)
    {
        this->data = data;
        this->BiggerNodePoint = NULL;
        this->SmallerNodePoint = NULL;
    }
};
// End of Generic Node Class

// Start of Generic Binary Search Tree Class Implementation
template <typename T>
class binarySearchTree
{
private:
    Node<T> *Root = NULL;
    long long Size = 0;
    void depthFirstSearch(Node<T> *node,vector<NodeStructure> &container,string type,bool all)
    {
        if (node == NULL)
            return;
        depthFirstSearch(node->SmallerNodePoint,container,type,all);
        if(all or node->data.type == type)container.push_back(node->data);
        depthFirstSearch(node->BiggerNodePoint,container,type,all);
    }
    long long leftDepth(Node<T>* node,long long cnt){
        if(node == NULL) return cnt+1;
        return leftDepth(node->SmallerNodePoint,cnt+1);
    }
    long long rightDepth(Node<T>* node,long long cnt){
        if(node == NULL)return cnt+1;
        return rightDepth(node->BiggerNodePoint,cnt+1);
    }
public:
    void getAll(vector<NodeStructure>&container){
        depthFirstSearch(Root,container,"all",true);
    }
    void add(T data)
    {
        if (Root == NULL)
        {
            Root = new Node<T>(data);
        }
        else
        {
            bool bigNode = false, smallNode = false;
            Node<T> *temp = Root;
            Node<T> *New = new Node<T>(data);
            if (temp->data < data)
                bigNode = true;
            else
                smallNode = true;
            while (true)
            {
                if (temp->BiggerNodePoint == NULL and bigNode)
                    break;
                if (temp->SmallerNodePoint == NULL and smallNode)
                    break;
                if(temp->data==data){
                    if(leftDepth(temp->SmallerNodePoint,0)>=rightDepth(temp->BiggerNodePoint,0)){
                    temp = temp->SmallerNodePoint;
                    }
                    else{
                    temp = temp->BiggerNodePoint;
                    }
                }
                else if (temp->data < data )
                {
                    temp = temp->BiggerNodePoint;
                }
                else
                {
                    temp = temp->SmallerNodePoint;
                }
                if(temp->data==data){
                    if(leftDepth(temp->SmallerNodePoint,0)>rightDepth(temp->BiggerNodePoint,0)){
                        bigNode=true;
                        smallNode=false;
                    }
                    else{
                        bigNode=false;
                        smallNode=true;
                    }
                }
                else if (temp->data < data)
                {
                    bigNode = true;
                    smallNode = false;
                }
                else
                {
                    smallNode = true;
                    bigNode = false;
                }
            }
            if (bigNode)
                temp->BiggerNodePoint = New;
            else
                temp->SmallerNodePoint = New;
        }
    }
};
// End of Generic Binary Search Tree Class Implementation
int main()
{
    NodeStructure a("sayem","http://www.","toys","male"),b("sayem","http://www.","toy","male"),c("sayem","http://www.","toyw","male");
    binarySearchTree<NodeStructure> d;
    d.add(b);
    d.add(a);
    d.add(a);
    d.add(a);
    d.add(a);
    d.add(b);
    d.add(a);
    d.add(a);
    d.add(c);
    vector<NodeStructure> v;
    d.getAll(v);
    for(auto& n : v)
    cout<<n.gender<<" "<<n.name<<" "<<n.type<<" "<<n.url<<endl;
}