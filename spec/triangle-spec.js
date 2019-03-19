import { Triangle } from "../src/triangletracker.js";

describe('Triangle',function(){
    it('should test whether a triangle has three sides', function(){
    var triangle = new Triangle(3,4,5);
    expect(triangle.side1).toEqual(3);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).not.toEqual(6);
    });
    it('should correctly return whether the trees sides can make a triangle', function(){
        var notTriangle = new Triangle(3,9,22);
        expect(notTriangle.checkType()).toEqual("not a triangle");
    });
    it('test to make sure equilateral', function(){
        var testTri = new Triangle(3,3,3)
        expect(testTri.checkType()).toEqual("an equilateral triangle");
    });
    it('test to make sure isosceles', function(){
        var testTri = new Triangle(3,2,2)
        expect(testTri.checkType()).toEqual("an isosceles triangle");
    });
    it('test to make sure scalene ', function(){
        var testTri = new Triangle(3,2,1)
        expect(testTri.checkType()).toEqual("a scalene triangle");
    });
    var reusableTriangle;
    
    beforeEach(function() {
        reusableTriangle = new Triangle(5, 5, 5);
    });
    
    it('should show how beforeEach() works', function() {
        console.log(reusableTriangle);
    });
});

 
   

