# Java

---

### 简答题

1. **JDK、JRE、JVM分别是什么**

   >JDK 是 Java 语言的软件开发工具包，包含了JRE，编译器和其他的工具，可以让开发者开发、编译、执行 Java 程序；JRE 是 Java 运行环境，包含了 JVM，以及Java核心库， JRE是 Java运行必不可少的；JVM 是Java虚拟机，是Java的运行环境。

2. **重载和覆盖(重写)有什么区别**

   >重载：重载发生在一个类中，其中参数类型和参数个数不同，方法名必须一样，方法的返回值类型可以不一样。
   >
   >重写：重写发生在子类和父类之间，是子类覆盖父类的方法，子类的方法名，参数类型和参数的个数必须和父类相同，如果有返回值，则返回值类型必须相同

3. **简述抽象类和接口的区别**

   >* 抽象类可以有构造方法，接口中不能有构造方法。
   >* 抽象类中可以有普通成员变量，接口中没有普通成员变量，接口中全是静态变量。
   >* 抽象类中可以包含静态方法，接口中不能包含静态方法。
   >* 一个类可以实现多个接口，但只能继承一个抽象类。
   >* 实现接口时里面的方法必须实现而抽象类则不需要。
   >* 抽象类中的方法不一定是抽象方法，接口中的方法一定是抽象方法。