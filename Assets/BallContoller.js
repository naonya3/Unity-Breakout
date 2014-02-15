#pragma strict

var speed = 5;

function Start () {
	rigidbody.AddForce((transform.forward + transform.right) * speed, ForceMode.VelocityChange);
}

function Update () {
	var blocks = GameObject.Find("Blocks");
	
	// Check count of remaining blocks.
	if (blocks.transform.childCount == 0) {
    		Debug.Log("Clear!!");
    		Destroy(this.gameObject);	
    }
}

function OnCollisionEnter(col:Collision) {
    var blocks = GameObject.Find("Blocks");
    if (col.transform.IsChildOf(blocks.transform)) {
    	Destroy(col.gameObject);
    }
    
    var bottomBar = GameObject.Find("BottomBar");
    if (col.gameObject == bottomBar) {
    	Debug.Log("Game Over");
    	Destroy(this.gameObject);
    }
}