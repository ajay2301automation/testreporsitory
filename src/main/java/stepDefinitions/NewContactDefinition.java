package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class NewContactDefinition {
	WebDriver driver;
	LoginStepDefinition login = new LoginStepDefinition();
	
	@FindBy(xpath="//a[contains(text(), 'Contacts')]")
	WebElement contacts;
	
	@Given("^User is on homepage when User enter \"(.*)\" and \"(.*)\"$")
	public void user_is_on_homepage_when_User_enter_and(String username, String password)
	{
	
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\AJBHARDW\\staging\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();	
		driver.get("https://classic.crmpro.com/login.cfm");
		driver.manage().timeouts().pageLoadTimeout(23, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(23, TimeUnit.SECONDS);
		driver.manage().window().maximize();
//		driver.findElement(By.xpath("//input[@name='username']")).sendKeys("ajay_automation");
//		driver.findElement(By.xpath("//input[@name='password']")).sendKeys("ajay@2301");
//		driver.findElement(By.xpath("//input[@class='btn btn-small']")).click();
		
		driver.findElement(By.xpath("//input[@name='username']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);
		driver.findElement(By.xpath("//input[@class='btn btn-small']")).click();
	
		
		
		String s=driver.getTitle();
		System.out.println("Title of homepage is:"+s);
	}
	
	@When("^User mousehover to contacts$")
	public void user_mousehover_to_contacts()
	{
		PageFactory.initElements(driver, this);
		driver.switchTo().frame(1);
		Actions action = new Actions(driver);
		action.moveToElement(contacts).build().perform();	
		
		}
	
	@Then("^User clicks on new contact$")
	public void user_clicks_on_new_contact()
	{
		driver.findElement(By.xpath("//a[contains(text(), 'New Contact')]")).click();
	}
	

	@Then("^User Enter the first name , last name ,and company name$")
	public void user_Enter_the_first_name_last_name_and_company_name()
	
	{
		
		driver.findElement(By.xpath("//input[@name='first_name']")).sendKeys("Mohan");
		driver.findElement(By.xpath("//input[@name='surname']")).sendKeys("Rao");
		driver.findElement(By.xpath("//input[@name='client_lookup']")).sendKeys("ULIP");
	}
	
	@Then("^User clicks on save button$")
	public void user_clicks_on_save_button()
	{
		driver.findElement(By.xpath("//input[@value='Save and Create Another (same company)']/preceding-sibling::input[@value='Save']")).click();
	
	
	}
	
	@Then("^Verify new contact is created$")
	public void verify_new_contact_is_created()
	{
		PageFactory.initElements(driver, this);
		contacts.click();
		WebElement verification=driver.findElement(By.xpath("//a[contains(text(),'David Wilson')]"));
		boolean b=verification.isDisplayed();
		Assert.assertEquals(true, b);
		driver.quit();
		
	
		
	}
}
