/*

Call two arms equally strong if the heaviest weights they each are able to lift are equal.

Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

input: yourLeft, yourRight, friendsLeft, friendsRight
output: boolean

- need to compare if your max weight is equal to the friends max weight

*/

def solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  const yourMax = Math.max(yourLeft, yourRight);
  const friendsMax = Math.max(friendsLeft, friendsRight);

  if (friendsMax !== yourMax) return false;
  return yourLeft+yourRight === friendsRight+friendsLeft;
}
