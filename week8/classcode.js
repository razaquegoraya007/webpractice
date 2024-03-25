var grandparent = document.getElementById('grandparent');

var newParent = document.createElement('div');
newParent.className = 'parent';
newParent.id = 'parent-3';

grandparent.appendChild(newParent);
console.log(grandparent)