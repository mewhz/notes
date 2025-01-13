# Java

---

#### JDK、JRE、JVM分别是什么

>JDK 是 Java 语言的软件开发工具包，包含了JRE，编译器和其他的工具，可以让开发者开发、编译、执行 Java 程序；JRE 是 Java 运行环境，包含了 JVM，以及Java核心库， JRE是 Java运行必不可少的；JVM 是Java虚拟机，是Java的运行环境。

#### 重载和覆盖(重写)有什么区别

>重载：重载发生在一个类中，其中参数类型和参数个数不同，方法名必须一样，方法的返回值类型可以不一样。
>
>重写：重写发生在子类和父类之间，是子类覆盖父类的方法，子类的方法名，参数类型和参数的个数必须和父类相同，如果有返回值，则返回值类型必须相同

#### 简述抽象类和接口的区别

>* 抽象类可以有构造方法，接口中不能有构造方法。
>* 抽象类中可以有普通成员变量，接口中没有普通成员变量，接口中全是静态变量。
>* 抽象类中可以包含静态方法，接口中不能包含静态方法。
>* 一个类可以实现多个接口，但只能继承一个抽象类。
>* 实现接口时里面的方法必须实现而抽象类则不需要。
>* 抽象类中的方法不一定是抽象方法，接口中的方法一定是抽象方法。

#### 什么是继承

>基于一个已存在的类，使用 extends 关键字创建一个新的类，已存在的类即父类，新的类即子类。
>
>特征：
>
>* 子类拥有父类非 private 的属性和方法。
>* 子类可以拥有自己的属性和方法，即子类可以对父类进行扩展。
>* 子类可以用自己的方式实现父类的方法。（即重写）

#### 描述 Java中的数据类型

>数据类型分为基本数据类型和引用数据类型：
>
>基本数据类型(共八种，四个整数型，两个浮点型，一个字符类型，一个布尔型)：
>
>1. byte：字节整数，数据类型是8位、有符号的整数，默认值0。
>2. short：短整型，16 位、有符号的整数，默认值0。
>3. int：整型，32位、有符号的整数，默认值0。
>4. long：长整型， 64 位、有符号的整数，默认值0L。
>5. float：单精度浮点型，32位的浮点数，默认值0.0f。
>6. double：双精度浮点型，64位的浮点数，默认值0.0。
>7. boolean：布尔型，1位，只有 true 和 false，默认值 false。
>8. char：字符型，单一的 16 位 Unicode 字符，默认值'u0000'。
>
>引用数据类型：对象，数组都是引用数据类型，引用数据类型指向一个对象，指向对象的变量是引用变量。

#### 变量的作用范围，类变量、实例变量、局部变量的区别

>1. 变量的作用域即作用范围，用一对大括号表示语句块的范围，在该作用域创建的变量，直到大括号关闭前都可以使用。
>2. 类变量也称静态变量，指被 static 修饰的成员变量，运行时 JVM 只为静态变量分配一次内存，在类的内部，可以在任何方法中直接访问静态变量；在其它类中，可以通过类名访问该类中的静态变量；静态变量可以被类的所有实例共享。
>3. 实例变量，指没有被 static 修饰的成员变量，每创建一个类的实例 JVM 就会为实例变量分配一次内存；在类的内部，可以在非静态方法中直接访问实例变量；在本类的静态方法或其他类中则需要通过类的实例对象进行访问。
>4. 局部变量，指在方法、形参、代码块中定义的变量，这种变量从初始化完成后开始生效，随着方法或代码块的结束而消亡，他们都被存储在方法的栈内存中。

#### 面向对象的三大特征是什么

   >**封装、继承和多态**
   >
   >1. 封装：封装就是隐藏对象的属性和实现细节，仅对外公开接口；封装的目的是增强安全性和简化编程，使用者不必了解具体的实现细节，而只是要通过外部接口以特定的访问权限来使用类的对象。
   >
   >2. 继承：继承机制允许创建分等级层次的关系。继承就是子类继承父类的特征和行为，使得子类对象（实例）具有父类的实例域和方法，或子类从父类继承方法，使得子类具有父类相同的行为。
   >
   >3. 多态：多态是同一个行为具有多个不同表现形式或形态的能力。是指一个类实例（对象）的相同方法在不同情形具有不同的表达形式。
   >
   >   多态的优点：消除类型之间的耦合关系，可替换性，可扩充性，接口性，灵活性和简化性。
   >
   >   多态存在的三个必要条件：继承，重写和父类引用指向子类对象。

#### 简述封装的实现过程和实现的必要性

>1. 封装的实现过程：
>   1. 私有化成员变量，使用 private 关键字修饰。
>   2. 提供公有的 get 和 set 方法，使用 public 修饰。
>   3. 在外部直接调用 get 和 set 方法，即可对成员变量进行访问和修改。
>2. 实现的必要性：封装的目的是增强安全性和简化编程，使用者不必了解具体的实现细节，而只是要通过外部接口以特定的访问权限来使用类的对象。

#### 子类从父类那里继承了什么

>特征和行为即子类拥有父类非 private 的属性和方法 (包括构造方法) 并且可以直接调用。

#### 简述多态的实现过程

>多态使用动态绑定机制：编译代码时，编译器只检查代码的语法是否有错；在运行代码时，执行器根据内存的真实情况去执行对应的代码；如果某个方法在子类中没有被重写，则执行父类的方法，反之则回去执行重写后的方法。

#### 接口的构成和作用

>接口中的包含：
>
>1. 变量：接口中的变量全是用 static final 修饰的常量。
>2. 方法：接口中的方法全是默认使用 public abstract 修饰的方法，即空实现的抽象方法。
>
>接口的作用：
>
>1. 统一访问：在接口中定义好的方法名或者变量名，类实现接口后，进行方法的实现，这样可以统一不同类实现相同方法时的方法名。
>2. 多重继承：可以通过实现多种接口实现多重继承。

#### final 的用法有哪些

>1. 修饰变量：final 修饰的变量只能在定义时，进行一次赋值操作，并且在后续的使用中不可以改变它的值。
>2. 修饰方法：final 修饰的方法不能被覆盖。
>3. 修饰类：final 修饰的类无法被继承。

#### static 的用法有哪些

>1. 修饰成员变量：被 static 修饰的成员变量叫静态成员变量或类变量；静态成员变量在内存中只有一份拷贝，JVM 只为静态成员变量分配一次内存，在加载类的过程中完成静态成员变量的内存分配，可以用类名直接访问，所有的实例对象共用一个静态变量。
>2. 修饰方法：被 static 修饰的方法叫做静态方法；静态方法可以直接通过类名调用，任何实例都可以调用，因此静态方法中不能用 this 和 super 关键字，不能直接访问所属类的实例变量和实例方法（不带 static 修饰的成员变量和方法），只能访问所属类的静态成员变量和静态方法。
>3. 修饰代码块：被 static 修饰的代码块叫静态代码块；静态代码块可以有多个，位置任意，它不在任何的方法体内，JVM 加载类时会执行这些静态代码块，如果 static 代码块有多个，JVM 将按照它们在类中出现的先后顺序执行它们，每个代码块只会被执行一次。

#### 事件三要素是什么

>1. 事件：事件封装了组件上发生的事情，比如按钮单击、按钮松开等。
>2. 事件源：即事件发生的场所，就是指各种组件，如按钮等。
>3. 事件监听器：负责监听事件源上发生的特定类型的事件，当事件到来时还必须负责处理相应的事件。

#### == 和 equals 的区别是什么

>1. 基本数据类型只能使用 ==，这里的 == 比较的是两个基本类型的值。
>2. 对象：
>   1. == 比较的是地址。
>   2. equals 对于没有重写 equals 方法的类比较的是地址。
>   3. equals 对于重写 equals 方法的类（如 String）则比较的是值。

#### 简述 String 和 StringBuilder 定义变量的方式和内存模型

>1. String：字符串常量，定义后字符串的长度不可变。
>2. StringBuilder：字符串变量，定义后字符串的长度可以改变。
>3. String 内存模型：底层用于存放字符的数组被声明为 final，因此只能赋值一次，不可再改变；定义字符串未使用 new 关键字时，会将定义的变量指向常量池中的字符串常量；使用new 关键字时，会在堆区中创建一个 String 的实例对象并在常量池创建对应的字符串常量，堆区的实例对象则会指向常量池中的字符串常量，而定义的变量则指向堆区的实例对象；使用 + 操作时，会额外创建 StringBuilder 变量指向新的字符串，并将 StringBuilder 变量转换为 String 重新赋值给字符串变量；重新赋值时都会生成新的 String 对象，然后把新的 String 对象赋值给原本的 String 引用。
>4. StringBuilder 内存模型：底层 StringBuilder 被当作是一个字符序列的变长数组，但不会保证线程同步；使用 StringBuilder 类时，每次都会对 StringBuilder 对象本身进行操作。

#### 简述构造方法的几种形式

>1. 无参构造方法：不带入参数的构造方法叫做无参构造方法。
>2. 有参构造方法：带入参数的构造方法叫做有参构造方法。
>3. 默认构造方法：即编译器自动创建的构造方法，默认的构造方法是空参空实现。

#### 数据流、字符流、字节流的概念

>1. 数据流：数据在内存和硬盘之间来回流动，所以叫做数据流；数据流是二进制存储的，对于二进制的数据流，如果8位一分割，就形成了字节流；如果按照字符编码格式去分割，就形成了字符流。
>
>2. 字符流：专门用于字符形式的读取和写入；以字符为单位对数据进行操作，在读的时候，将二进制数据转换为字符，在写的时候，将字符转换为二进制数据。类：Reader 和 Writer；标准流：FileReader 和 FileWriter ；缓冲流：BufferedReader 和 BufferedWriter。
>3. 字节流：以8位为单位，对二进制数据进行操作时对数据不进行转换；类：InputStream 和 OutputStream；标准流：FileInputStream 和 FileOutputStream；缓冲流：BufferInputStream 和 BufferOutputStream。

#### 读写一个文本文件过程

>1. 创建源：使用 File 类，获取文件的对象。
>2. 选择流：选择字节流或字符流；再选择标准流或缓冲流；创建流的对象。
>3. 读写操作：调用流的对象中读写操作方法，进行读写文件；缓冲流在写入时需要将缓冲区的再次进行写入。
>4. 释放资源：释放读写流对象的关闭操作，对文件进行关闭，防止之后无法打开。

#### File 类的作用是什么

>File 类是 Java 中代表文件本身的对象，符合 Java 中的万物皆对象原则。File 类主要用来获取和处理文件相关的信息，File 不具有从文件中读取信息和向文件中写入信息的功能，它仅用来描述文件本身的属性。

#### 简述三种集合各自的特点，并列举有哪些类

>1. List 集合：List 集合是按照顺序存放数据，允许数据存在重复。
>
>   包含 ArrayList 和 LinkList 类：
>
>   1. ArrayList：是实现了基于动态数组的数据结构。
>   2. LinkList：是实现了基于链表的数据结构。
>
>2. Set 集合：Set 集合是不允许出现重复元素，相同元素只会存放一个，Set 中没有角标，比较的是元素的 hashCode。
>
>   包含 TreeSet 、HashSet 和 LinkedHashSet 类：
>
>   1. TreeSet：底层是红黑树的数据结构，有自己的排序，当存放的是对象时，排序对象要实现比较器接口 Comparable；
>   2. HashSet：底层是 HashMap ，HashMap 中插入数据时的顺序和输出数据时的顺序无关。
>   3. LinkedHashSet：去掉重复元素，插入数据的顺序与输出数据的顺序相同。
>
>3. Map 集合：Map 集合是一个键值对，存储的内容是键值对(key - value)映射。
>
>   包含 HashMap、Hashtable、LinkedHashMap 和 TreeMap：
>
>   1. HashMap：是最常用的 Map，它根据键的 hashCode 值存储数据，根据键可以直接获取它的值，具有很快的访问速度。HashMap 最多只允许一条记录的键为 null，HashMap 不支持线程同步。
>   2. Hashtable：与 HashMap 类似，不同的是，他不允许记录的键或值为空，并且支持线程同步，不过写入时会 HashMap 较慢。
>   3. LinkedHashMap：保存了插入时的顺序，使用迭代器（Iterator）遍历时，会按照插入顺序输出，具有 HashMap 的全部特征，遍历时会比 HashMap 慢。
>   4. TreeMap：能够把它保存的数据根据键进行排序，默认按照 key 升序排列，也可以指定排序的比较器，使用迭代器（Iterator）便利 TreeMap 时，得到的序列是排过序的，TreeMap 的键值都不可为空。

#### Java 类加载过程

>JVM 执行时，遇到一个新的类会去内存的堆区中寻找 class 的信息，如果找到则直接用；如果没有找到则会将字节码文件加载到堆区。
>
>1. 将父类所有的静态内容加载到静态方法区。
>2. 执行父类静态代码块的内容。
>3. 对所有父类静态变量进行默认初始化。
>4. 对所有父类静态变量进行显式初始化（赋值）。
>
>**2 和 3 谁写在前面先执行谁，4 跟在 3 后面执行。**
>
>4. 将本类的所有静态内容加载到静态方法区。
>5. 执行本类的静态代码块的内容。
>6. 对所有本类静态变量进行默认初始化。
>7. 对所有本类静态变量进行显式初始化（赋值）。
>
>**5 和 6 谁写在前面先执行谁，7 跟在 6 后面执行。**
>
>7. 将父类中所有非静态内容块加载到非静态方法区。
>8. 类的加载完成。
>
>**静态方法和非静态方法属于被动调用，只有调用时才会执行。**

#### Java 对象的创建过程

>创建对象时，首先加载对应的类。
>
>1. new 一个对象时，在堆内容中开辟一块空间。
>2. 给开辟的空间分配一个地址。
>3. 把对象的所有非静态成员加载到所开辟的空间下。
>4. 所有的非静态成员加载完成之后，对所有非静态成员变量进行默认初始化。
>5. 所有非静态成员变量默认初始化完成之后，调用构造函数。
>6. 如果构造函数第一句是 super 则创建父类对象并调用父类对应的构造函数。
>7. 如果构造函数第一句是 this 则调用 this 对应的构造函数。
>8. 在整个构造函数执行完后，把空间分配的地址赋给引用对象。
>9. 对象的创建完成。

#### 普通类和抽象类、内部类的区别

>1. 普通类：与文件名相同并使用 class 修饰的类叫做普通类；类是 Java 中最基础的元素，可以用来生成对象，类中的方法不能有抽象方法，作为父类时，不强制要求子类必须重写父类的方法，可以被 final 修饰，代表不能继承该类。
>2. 抽象类：使用 abstract 修饰的类叫做抽象类；拥有抽象方法的类，必须定义成抽象类，抽象类可以没有抽象方法，抽象类不能实例化即不可以生成对象，作为父类时，如果子类不是抽象类，则要求子类一定要实现父类中的抽象方法，反之则不用，不能被 final 修饰。
>3. 内部类：在一个类内部定义的类叫做内部类；它可以直接访问和引用他的外部类的所有变量和方法，与外部类相比，内部类可以声明为 private 或 protected。