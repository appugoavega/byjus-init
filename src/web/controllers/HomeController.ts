import Locals from '../providers/Locals';

class Home {
	public static index(request: any, response: any, next: any): any {
		response.json({
			message: Locals.config().name
        });
        console.log('Home controller',request);
	}
}

export default Home;