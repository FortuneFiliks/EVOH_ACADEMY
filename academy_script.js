let get_First_Section_Heading = document.querySelector(".first_section_heading");

function first_Section_Heading_Animation(entries, target){
	entries.forEach( (entry) => {
	    if(entry.isIntersecting){
            entry.target.classList.add("animate_first_section_heading");
		}			
	});
}
	
const first_Section_Heading_Animation_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.6,
	
}
	
const first_Section_Heading_Animation_API = new IntersectionObserver(first_Section_Heading_Animation, first_Section_Heading_Animation_Root);


first_Section_Heading_Animation_API.observe(get_First_Section_Heading);



let get_Cap_Heading = document.querySelector(".cap_heading");

function cap_Heading_Animation(entries, target){
	entries.forEach( (entry) => {
	    if(entry.isIntersecting){
            entry.target.classList.add("animate_cap_heading");
			entry.target.unobserve;
		}			
	});
}
	
const cap_Heading_Animation_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.6,
	
}
	
const cap_Heading_Animation_API = new IntersectionObserver(cap_Heading_Animation, cap_Heading_Animation_Root);


cap_Heading_Animation_API.observe(get_Cap_Heading);



let get_Second_Section_Image = document.querySelector(".teaching_img");
function second_Section_Image_Animation(entries, target){
	entries.forEach( (entry) => {
        if(entry.isIntersecting){
			entry.target.classList.add("animate_teaching_img");
			entry.target.unobserve;
		}
	});		
	
}

const second_Section_Image_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.6,
}
	
	
const second_Section_Image_Animation_API = new IntersectionObserver(second_Section_Image_Animation, second_Section_Image_Root);

second_Section_Image_Animation_API.observe(get_Second_Section_Image);



let get_Third_Section_Flex_Item = document.querySelector(".third_section_flex_item");
function third_Section_Flex_Item_Animation(entries, target){
	entries.forEach( (entry) => {
        if(entry.isIntersecting){
			entry.target.classList.add("animate_third_section_flex_item");
			entry.target.unobserve;
		}
	});		
	
}

const third_Section_Flex_Item_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : 0.6,
}
	
	
const third_Section_Flex_Item_Animation_API = new IntersectionObserver(third_Section_Flex_Item_Animation, third_Section_Flex_Item_Root);

third_Section_Flex_Item_Animation_API.observe(get_Third_Section_Flex_Item);
