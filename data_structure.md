# 数据结构
---

### 线性表

#### 顺序表

```cpp
# include <iostream>
# define OK 1
# define ERROR 0
# define INITSIZE 100
using namespace std;
typedef int ElemType;
typedef int Status;
typedef struct {
	// 数据域
	ElemType *data;
	//  maxSize 是最大容量
	// length 是当前顺序表的长度
	int maxSize, length;
} List;
// 初始化顺序表
Status initList(List &L) {
	L.data = new ElemType[INITSIZE];
	L.length = 0;
	L.maxSize = INITSIZE;
	return OK;
}
// 顺序表的插入
// L 为顺序表, i 是插入的位置, e 是插入的元素
Status insertList(List &L, int i, ElemType &e) {
	if (i < 1 || i > L.maxSize)	return ERROR;
	if (L.length == L.maxSize)	return ERROR;
	for (int j = L.length; j >= i; j --)	L.data[j] = L.data[j - 1];
	L.data[i - 1] = e;
	L.length ++;
	return OK;
}
// 获取指定下标的元素
// L 为顺序表, i 是获取的位置, e 是得到元素的存放位置
Status getList(List &L, int i, ElemType &e) {
	if (i < 1 || i > L.maxSize)	return ERROR;
	if (L.length == 0)	return ERROR;
	e = L.data[i - 1];
	return OK;
}
// 删除指定下标的元素
// L 为顺序表, i 是删除的位置
Status deleteList(List &L, int i) {
	if (i < 1 || i > L.length)	return ERROR;
	for (int j = i; j <= L.length; j ++)	L.data[j - 1] = L.data[j];
	L.length --;
	return OK;
}
int main() {
	List L;
	initList(L);
	ElemType e = 20;
	insertList(L, 1, e);
	e += 10;
	insertList(L, 2, e);
	e += 11;
	insertList(L, 3, e);
	for (int i = 1; i <= L.length; i ++) {
		ElemType t;
		getList(L, i, e);
		cout << e << endl;
	}
	deleteList(L, 2);
	for (int i = 1; i <= L.length; i ++) {
		ElemType t;
		getList(L, i, e);
		cout << e << endl;
	}
	return 0;
}
```

#### 链表

```cpp
#include <iostream>
#define OK 1
#define ERROR 0
using namespace std;
typedef int ElemType;
typedef int Status;
typedef struct LNode{
    // 数据域
    ElemType data;
    // 指针域
    struct LNode *next;
}LNode, *LinkList;
Status initList(LinkList &L){
    L = new LNode;
    L->next = NULL;
    return OK;
}
// 单链表的插入
// L 是单链表, i 是插入的位置, e 是插入的元素
Status insertList(LinkList &L, int i, ElemType e){
    LNode *p = L;
    int j = 0;
    while (p && j < i - 1){
        p = p->next;
        j ++;
    }
    if (!p || j > i - 1)    return ERROR;
    LNode *s = new LNode;
    s->data = e;
    s->next = p->next;
    p->next = s;
    return OK;
}
// 获取单链表的元素
// L 是单链表, i 是获取的位置, e 是获取后保存在的元素
Status getList(LinkList L, int i, ElemType &e){
    LNode *p = L->next;
    int j = 1;
    while (p && j < i){
        p = p->next;
        j ++;
    }
    if (!p || j > i)    return ERROR;
    e = p->data;
    return OK;
}
// 删除单链表的元素
// L 是单链表, i 是删除的第几个元素
Status deleteList(LinkList L, int i){
    LNode *p = L;
    int j = 0;
    while (p->next && j < i - 1){
        p = p->next;
        j ++;
    }
    if (!(p->next) || j > i - 1)    return ERROR;
    LNode *q = p->next;
    p->next = q->next;
    ElemType e = q->data;
    delete q;
    return OK;
}
int main(){
    LinkList L;
    initList(L);
    ElemType e = 20;
    insertList(L, 1, e);
    e += 10;
    insertList(L, 2, e);
    e += 11;
    insertList(L, 3, e);
    for (int i = 1; i <= 3; i ++){
        ElemType t;
        getList(L, i, t);
        cout << t << endl;
    }
    deleteList(L, 2);
    for (int i = 1; i <= 2; i ++){
        ElemType t;
        getList(L, i, t);
        cout << t << endl;
    }
    return 0;
}
```
