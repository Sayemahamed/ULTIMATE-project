#include <bits/stdc++.h>
#include "fileSys.cpp"
#include "customNode.cpp"
#include "customDataStructure.cpp"
using namespace std;

int main()
{
    NodeStructure a("sayem", "http://www.","10", "toys", "male"), b("sayem", "http://www.","20", "toy", "male"), c("sayem", "http://www.","40", "toy", "male");
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
    d.add(b);
    vector<NodeStructure> v;
    d.getAll(v);
    for (auto &n : v)
        cout << n.gender << " " << n.name << " "<<n.price<<' ' << n.type << " " << n.url << endl;
}