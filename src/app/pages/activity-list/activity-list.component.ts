import { Component } from '@angular/core';

interface Activity {
	summary: string;
	details: string[];
	question?: string;
	placeholder?: string;
	citation?: string;
}
@Component({
	selector: 'app-activity-list',
	templateUrl: './activity-list.component.html',
	styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent {
	activities: Activity[] = [
		{
			summary: 'Do a guided meditation',
			details: [
				`Using your app of choice, do one guided meditation. It doesn't have to be a long session.`,
				` See how you feel afterwards.`
			]
		},
		{
			summary: `Check if you are aligned with your new self`,
			details: [
				`If you haven't already, set an intention for the person you want to be in the future.`,
				`This intention, this new you, is now your north star.`,
				`When you feel like doing something out of anxiety check and see if what the anxiety wants you to do is actually aligned with the future you want for yourself.`,
				`Is the action you are thinking about doing rooted in fear or is it rooted in love for yourself?`,
				`Is the action you are thinking about doing, the past you or the future you?`,
				`Do not act on things rooted in fear. Do not act on things that do not bring you closer to the future you. `,
				`Choose acts rooted in love. Choose acts that are the future you.`
			]
		},
		{
			summary: 'Focus on the positive by practicing gratitude',
			details: [
				`Studies have shown that regularly practicing gratitude can help 
      rewire your brain to more easily refocus on the good in your life.`,
				`
      Consider gratitude journaling every day 1 to 3 things that you are thankful for.`
			],
			question: "What's something you're grateful for in this present moment?",
			placeholder: `It can be anything as simple as, "I had a delicious meal" or "I got to take a hot shower"  `,
			citation:
				'Sources for the studies can be found at https://positivepsychology.com/benefits-of-gratitude/'
		},
		{ summary: 'Journal to process and release your feelings', details: [``] },
		{
			summary: 'Be patient and gentle with yourself and the situation',
			details: [
				`Take it day by day, week by week, month by month. `,
				`There will be good days and bad days. The bad days are part of the process.`,
				`Everyone heals at their own pace and the path to healing is not linear.`,
				`Meet yourself where you currently are. Meet others where they currently are.`,
				`The shame or guilt you feel for any relapse is proof that you are working on improving yourself and situation.`
			]
		},
		{
			summary: 'Check if your basic needs are being met',
			details: [
				`Make sure your basic needs are fulfilled. Your anxiety or down mood may be caused from being too tired or too hungry.`,
				`Check in with yourself and think about when was the last time you ate? When was the last time you drank some water? How many hours did you sleep? When was the last time you showered?`,
				`If you find that some basic needs haven't been fulfilled in a while, go ahead and fulfill the basic need and see if you feel better after.`,
				`If you don't feel any better, that's okay! At least we have your basic needs covered and now know that your current mood is originating from somewhere else.`
			],
			citation:
				'You can read more about basic needs at https://en.wikipedia.org/wiki/Maslow%27s_hierarchy_of_needs#Physiological_needs'
		}
	];
}
