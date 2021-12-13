# 数据结构
---

### 线性表

#### 顺序表

```cpp
#include <iostream>
#define OK 1
#define ERROR 0
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

### 栈和队列

#### 顺序栈

```cpp
#include <iostream>
#define OK 1
#define ERROR 0
#define MAXSIZE 100
#define OVERFLOW -2
using namespace std;
typedef int Status;
typedef char SElemType;

typedef struct{
    // 栈底指针
    SElemType *base;
    // 栈顶指针
    SElemType *top;
    // 栈可用的最大容量
    int stackSize;
}SqStack;

// 顺序栈的初始化
Status initStack(SqStack &S){
    S.base = new SElemType[MAXSIZE];
    if (!S.base)    exit(OVERFLOW);
    S.top = S.base;
    S.stackSize = MAXSIZE;
    return OK;
}
// 顺序栈入栈
Status push(SqStack &S, SElemType e){
    // 栈满
    if (S.top - S.base == S.stackSize)  return ERROR;
    *(S.top++) = e;
    return OK;
}
// 顺序栈出栈
Status pop(SqStack &S, SElemType &e){
    // 栈空
    if (S.base == S.top)    return ERROR;
    e = *(--S.top);
    return OK;
}
// 取栈顶元素
SElemType getTop(SqStack S){
    if (S.top != S.base)    return *(S.top - 1);
}
int main(){
    SqStack S;
    initStack(S);
    SElemType e = 'A';
    push(S, e);
    e = 'V';
    push(S, e);
    e = 'C';
    push(S, e);
    for (int i = 0; i < 3; i ++){
        SElemType t;
        pop(S, t);
        cout << t << endl;
    }
    e = 'S';
    push(S, e);
    cout << getTop(S) << endl;
    return 0;
}
```

#### 链栈

```cpp
#include <iostream>
using namespace std;

#define OK 1
#define ERROR 0
typedef int Status;
typedef char SElemType;

typedef struct StackNode{
    SElemType data;
    struct StackNode *next;
}StackNode, *LinkStack;

// 链栈的初始化
Status initStack(LinkStack &S){
    S = NULL;
    return OK;
}
// 链栈入栈
Status push(LinkStack &S, SElemType e){
    StackNode *p = new StackNode;
    p->data = e;
    p->next = S;
    S = p;
    return OK;
}
// 链栈的出栈
Status pop(LinkStack &S, SElemType &e){
    StackNode *p = new StackNode;
    if (S == NULL)  return ERROR;
    e = S->data;
    p = S;
    S = S->next;
    delete p;
    return OK;
}
// 取栈顶元素
SElemType getTop(LinkStack S){
    if (S != NULL)  return S->data;
}
int main(){
    LinkStack S;
    initStack(S);
    SElemType e = 'A';
    push(S, e);
    e = 'V';
    push(S, e);
    e = 'C';
    push(S, e);
    for (int i = 0; i < 3; i ++){
        SElemType t;
        pop(S, t);
        cout << t << endl;
    }
    e = 'S';
    push(S, e);
    cout << getTop(S) << endl;
    return 0;
}
```

#### 顺序队列(循环队列)

```cpp
#include <iostream>
using namespace std;

#define MAXSIZE 100
#define OK 1
#define ERROR 0
#define OVERFLOW -2
typedef char QElemType;
typedef int Status;

typedef struct {
    QElemType *base;
    int front;
    int rear;
}SqQueue;
// 循环队列的初始化
Status initQueue(SqQueue &Q){
    Q.base = new QElemType[MAXSIZE];
    if (!Q.base) exit(OVERFLOW);
    Q.front = Q.rear = 0;
    return OK;
}
// 循环队列的长度
int queueLength(SqQueue Q){
    return (Q.rear - Q.front + MAXSIZE) % MAXSIZE;
}
// 循环队列入队
Status enQueue(SqQueue &Q, QElemType e){
    if ((Q.rear + 1) % MAXSIZE == Q.front)  return ERROR;
    Q.base[Q.rear] = e;
    Q.rear = (Q.rear + 1) % MAXSIZE;
    return OK;
}
// 循环队列的出队
Status deQueue(SqQueue &Q, QElemType &e){
    if (Q.front == Q.rear)  return ERROR;
    e = Q.base[Q.front];
    Q.front = (Q.front + 1) % MAXSIZE;
    return OK;
}
// 取队头元素
QElemType getHead(SqQueue Q){
    if (Q.front != Q.rear)  return Q.base[Q.front];
}
int main(){
    SqQueue Q;
    initQueue(Q);
    QElemType e = 'A';
    enQueue(Q, e);
    e = 'V';
    enQueue(Q, e);
    e = 'C';
    enQueue(Q, e);
    for (int i = 0; i < 3; i ++){
        QElemType t;
        deQueue(Q, t);
        cout << t << endl;
    }
    e = 'S';
    enQueue(Q, e);
    cout << getHead(Q) << endl;
    return 0;
}
```

#### 链队

```cpp
#include <iostream>
using namespace std;

#define OK 1
#define ERROR 0
typedef char QElemType;
typedef int Status;

typedef struct QNode{
    QElemType data;
    struct QNode *next;
}QNode, *QueuePtr;
typedef struct{
    QueuePtr front;
    QueuePtr rear;
}LinkQueue;
// 链队的初始化
Status initQueue(LinkQueue &Q){
    Q.front = Q.rear = new QNode;
    Q.front->next = NULL;
    return OK;
}
// 链队入队
Status enQueue(LinkQueue &Q, QElemType e){
    QNode *p = new QNode;
    p->data = e;
    p->next = NULL;
    Q.rear->next = p;
    Q.rear = p;
    return OK;
}
// 链队出队
Status deQueue(LinkQueue &Q, QElemType &e){
    QNode *p = new QNode;
    if (Q.front == Q.rear)  return ERROR;
    p = Q.front->next;
    e = p->data;
    Q.front->next = p->next;
    if (Q.rear == p)    Q.rear = Q.front;
    delete p;
    return OK;
}
// 取队头元素
QElemType getHead(LinkQueue Q){
    if (Q.front != Q.rear)  return Q.front->next->data;
}
int main(){
    LinkQueue Q;
    initQueue(Q);
    QElemType e = 'A';
    enQueue(Q, e);
    e = 'V';
    enQueue(Q, e);
    e = 'C';
    enQueue(Q, e);
    for (int i = 0; i < 3; i ++){
        QElemType t;
        deQueue(Q, t);
        cout << t << endl;
    }
    e = 'S';
    enQueue(Q, e);
    cout << getHead(Q) << endl;
    return 0;
}
```

### 树

#### 先序遍历创建树并使用中序遍历访问

```cpp
#include <iostream>
using namespace std;

#define OK 1
#define ERROR 0
typedef int Status;
typedef char TElemType;

typedef struct BiNode{
    TElemType data;
    struct BiNode *lChild, *rChild;
}BiNode, *BiTree;

// 先序遍历的顺序建立二叉链表
Status createBiTree(BiTree &T){
    TElemType ch;
    cin >> ch;
    // 空树
    if (ch == '#')  T = NULL;
    else{
        T = new BiNode;
        T->data = ch;
        createBiTree(T->lChild);
        createBiTree(T->rChild);
    }
    return OK;
}
// 中序遍历二叉树
Status inOrderTraverse(BiTree T){
    if (T){
        inOrderTraverse(T->lChild);
        cout << T->data << " ";
        inOrderTraverse(T->rChild);
    }
    return OK;
}
int main(){
    BiTree T;
    // ABC##DE#G##F###
    createBiTree(T);
    // C B E G D F A
    inOrderTraverse(T);
    return 0;
}
```

### 图

#### 邻接矩阵创建无向图

```cpp
#include <bits/stdc++.h>
using namespace std;

#define NUM 100
#define OK 1
#define ERROR 0
// 点
typedef int VerTextType;
// 边的权重
typedef int ArcType;

typedef struct{
    // 点的集合
    VerTextType vexs[NUM];
    // 邻接矩阵
    ArcType arcs[NUM][NUM];
    // 点的数量 边的数量
    int vexNum, arcNum;
}AMGraph;
// 确定点 v 在 G 中的位置
int locateVex(AMGraph G, VerTextType v){
    for (int i = 0; i < G.vexNum; i ++){
        if (G.vexs[i] == v) return i;
    }
    return -1;
}
// 创建无向图
int createUDN(AMGraph &G){
    cin >> G.vexNum >> G.arcNum;
    for (int i = 0; i < G.vexNum; i ++){
        G.vexs[i] = i;
    }
    memset(G.arcs, 0, sizeof G.arcs);
    for(int i = 0; i < G.arcNum; i ++){
        VerTextType v1, v2;
        ArcType w = 1;
        cin >> v1 >> v2;
        int x = locateVex(G, v1);
        int y = locateVex(G, v2);
        G.arcs[x][y] = G.arcs[y][x] = w;
    }
    return OK;
}
int main(){
    AMGraph G;
    /*
     * 3 3
     * 0 1
     * 1 2
     * 0 2
     */
    createUDN(G);
    for (int i = 0; i < G.vexNum; i ++){
        for (int j = 0; j < G.vexNum; j ++){
            cout << G.arcs[i][j] << " ";
        }
        cout << endl;
    }
    /*
     * 0 1 1
     * 1 0 1
     * 1 1 0
     */
}
```

#### 邻接表创建无向图

```cpp
#include <iostream>
using namespace std;

#define MVNum 100
#define OK 1

// 点
typedef int VerTexType;

typedef struct ArcNode{
    // 边所指向的顶点位置
    int adjvex;
    // 指向下一条边的指针
    struct ArcNode *nextarc;
}ArcNode;

typedef struct Vnode{
    // 顶点信息
    VerTexType data;
    // 指向第一条依附该顶点的边的指针
    ArcNode *firstarc;
}Vnode, AdjList[MVNum];

typedef struct{
    AdjList vertices;
    int vexnum, arcnum;
}ALGraph;
// 确定点 v 在 G 中的位置
int locateVex(ALGraph G, VerTexType v){
    for (int i = 0; i < G.vexnum; i ++){
        if (G.vertices[i].data == v)    return i;
    }
    return -1;
}

int createUDG(ALGraph &G){
    cin >> G.vexnum >> G.arcnum;
    for (int i = 0; i < G.vexnum; i ++){
        cin >> G.vertices[i].data;
        G.vertices[i].firstarc = NULL;
    }

    for (int i = 0; i < G.arcnum; i ++){
        VerTexType v1, v2;
        cin >> v1 >> v2;
        int x = locateVex(G, v1);
        int y = locateVex(G, v2);

        ArcNode *p = new ArcNode;
        p->adjvex = x;
        p->nextarc = G.vertices[y].firstarc;
        G.vertices[y].firstarc = p;

        ArcNode *q = new ArcNode;
        q->adjvex = y;
        q->nextarc = G.vertices[x].firstarc;
        G.vertices[x].firstarc = q;

        return OK;
    }
}
```
