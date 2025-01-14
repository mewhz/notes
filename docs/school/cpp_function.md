# C++ 

### sort函数

1. sort 是调用标准库中的排序方法对数组实现排序
2. 参数**void sort (RandomAccessIterator first, RandomAccessIterator last, Compare comp);**
   1. 第一个参数 first：需要排序的数组的起始地址
   2. 第二个参数 last：是结束的地址
   3. 第三个参数comp：是排序方法，如果第三个参数不写，则默认排序方法为从小到大
3. 实例

**简单数组排序 (不加参数)**

```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){
	int a[5] = {4, 5, 2, 1, 3};
	sort(a, a + 5);	// 无第三个参数则默认从小到大
	for (int i = 0; i < 5; i++)	cout << a[i] << " ";
	return 0;
}
```

**输出：**

```shell
1 2 3 4 5
```

**简单数组排序 (加参数)**

```cpp
#include <bits/stdc++.h>
using namespace std;
bool cmp(int a, int b){
	return a > b;	// 自定义函数，实现从大到小的排序
}
int main(){
	int a[5] = {4, 5, 2, 1, 3};
	sort(a, a + 5, cmp);	// 加入第三个参数
	for (int i = 0; i < 5; i++)	cout << a[i] << " ";
	return 0;
}
```

**输出：**

```shell
5 4 3 2 1
```

**结构体数组排序**

```cpp
#include <bits/stdc++.h>
using namespace std;
typedef struct {
	int score;
	int age;
}Student;	// 定义结构体
bool cmp(Student x, Student y){
	if (x.score != y.score){
		return x.score > y.score;	// 如果score属性不同时, 按照score 从大到小排列
	} 
	return x.age > y.age;	// 如果score属性相同时, 按照age 从大到小排列
}
int main(){
	Student s[5] = {
	20, 30, 
	5, 30, 
	20, 10, 
	50, 70,
	5, 5
	};	// 定义结构体并且初始化
	cout << "排序前:" << endl;
	for (int i = 0; i < 5; i++)	cout << s[i].score << " " << s[i].age << endl;
	sort(s, s + 5, cmp);
	cout << "排序后:" << endl;
	for (int i = 0; i < 5; i++)	cout << s[i].score << " " << s[i].age << endl;
	return 0;
}
```

**输出：**

```shell
排序前:
20 30
5 30
20 10
50 70
5 5
排序后:
50 70
20 30
20 10
5 30
5 5
```

