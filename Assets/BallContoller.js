#pragma strict

var speed = 5;

function Start () {
	rigidbody.AddForce((transform.forward + transform.right) * speed, ForceMode.VelocityChange);
}

function Update () {

}

function OnCollisionEnter(col:Collision) {
    var blocks = gameObject.Find("Blocks");
    if (col.transform.IsChildOf(blocks.transform)) {
    	Destroy(col.gameObject);
    }
}