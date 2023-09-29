class Tables{
    constructor(height, width, depth, material, drawers){
        this.height = height;
        this.width = width;
        this.depth = depth;
        this.material = material;
        this.drawers = drawers;
    }

    getHeight(){
        return this.height
    }
    getWidth(){
        return this.width
    }
    getDepth(){
        return this.depth
    }
    getMaterial(){
        return this.material
    }
    getDrawers(){
        return this.drawers
    }


    setHeight(height){
        this.height = height
    }
    setWidth(width){
        this.width = width
    }
    setDepth(depth){
        this.depth = depth
    }
    setMaterial(material){
        this.material = material
    }
    setDrawers(drawers){
        this.drawers = drawers
    }

    toString(){
        return (
            'Height:' + this.height +
            'Width:' + this.width +
            'Depth:' + this.depth +
            'Material:' + this.material +
            'Drawers:' + this.drawers
            )
    }
}