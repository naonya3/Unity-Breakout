#pragma strict

var speed = 5;

function Start () {
	rigidbody.AddForce((transform.forward + transform.right) * speed, ForceMode.VelocityChange);
}

function Update () {

}