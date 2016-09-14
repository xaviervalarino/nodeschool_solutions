var node = document.createElement('div');
node.innerHTML = 'Hello <span class="name"></span>!';

function Widget () {
    if ( !(this instanceof Widget)) return new Widget;
    this.node = node;
}

Widget.prototype.setName = function (name) {
    this.node.querySelector('.name').textContent = name;
};

Widget.prototype.appendTo = function (parent) {
    parent.appendChild( this.node );
};

module.exports = Widget;
