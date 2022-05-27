interface ClonableNodeInterface<NodeType> {
  clone(): ForwardNode<NodeType>;
}

class ForwardNode<NodeType> implements ClonableNodeInterface<NodeType> {
  public value: NodeType;

  public nextNode: ForwardNode<NodeType>;

  constructor(
    value: NodeType,
    nextNode: ForwardNode<NodeType>
  ) {
    this.value = value;
    this.nextNode = nextNode;
  }

  clone(): ForwardNode<NodeType> {
    return new ForwardNode<NodeType>(
      this.value,
      this.nextNode
    );
  }
}

interface ForwardLinkedListInterface<ListType> {
  add(value: ListType): void;

  next(): ForwardNode<ListType>;

  print(): void;
}

class ForwardLinkedList<ListType> implements ForwardLinkedListInterface<ListType> {
  private rootNode: ForwardNode<ListType>;

  private iterableNode: ForwardNode<ListType>;

  add(value: ListType): void {
    if (this.rootNode === null) {
      this.rootNode = new ForwardNode<ListType>(value, null);

      return;
    }

    const tempNode = new ForwardNode<ListType>(value, null);
    tempNode.nextNode = this.rootNode;
    this.rootNode = tempNode;
  }

  next(): ForwardNode<ListType> {
    if (this.iterableNode === null) {
      this.iterableNode = this.rootNode.clone();

      return this.iterableNode;
    }

    this.iterableNode = this.iterableNode.nextNode;

    return this.iterableNode;
  }

  print(): void {
    let tempNode: ForwardNode<ListType> = this.rootNode.clone();

    for(;tempNode !== null;) {
      console.log(`[${tempNode.value}] `);

      tempNode = tempNode.nextNode;
    }
  }
}

enum T {
  'r32'
};

type PList = number | string | boolean | T;

const list = new ForwardLinkedList<PList>();

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(T.r32);
list.add(true);

list.print();
