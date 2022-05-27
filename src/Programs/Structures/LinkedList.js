var ForwardNode = /** @class */ (function () {
    function ForwardNode(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }
    ForwardNode.prototype.clone = function () {
        return new ForwardNode(this.value, this.nextNode);
    };
    return ForwardNode;
}());
var ForwardLinkedList = /** @class */ (function () {
    function ForwardLinkedList() {
    }
    ForwardLinkedList.prototype.add = function (value) {
        if (this.rootNode === null) {
            this.rootNode = new ForwardNode(value, null);
            return;
        }
        var tempNode = new ForwardNode(value, null);
        tempNode.nextNode = this.rootNode;
        this.rootNode = tempNode;
    };
    ForwardLinkedList.prototype.next = function () {
        if (this.iterableNode === null) {
            this.iterableNode = this.rootNode.clone();
            return this.iterableNode;
        }
        this.iterableNode = this.iterableNode.nextNode;
        return this.iterableNode;
    };
    ForwardLinkedList.prototype.print = function () {
        var tempNode = this.rootNode.clone();
        for (; tempNode !== null;) {
            console.log("[".concat(tempNode.value, "] "));
            tempNode = tempNode.nextNode;
        }
    };
    return ForwardLinkedList;
}());
var T;
(function (T) {
    T[T["r32"] = 0] = "r32";
})(T || (T = {}));
;
var list = new ForwardLinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(T.r32);
list.add(true);
list.print();
