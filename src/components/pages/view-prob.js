import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ViewProb = props => {
}

const mapStateToProps = state => ({
  name: state.auth.name,
  proposal: state.proposals.proposal
});

<section>
<h1>View Proposal</h1>
ID: {{prob.prob_id}}<br />
Subject: {{prob.subjectName}}<br />
Author: {{author}}
<h3>Problem</h3>
{{prob.problem}}
<h3>Answer</h3>
{{prob.answer}}
<h3>Solution</h3>
{{prob.solution}}

<br /><br />

<h1>Alternate Solutions</h1>
<div ng-show="solutions.length == 0">
	<p>No alternate solutions.</p>
</div>
<div ng-hide="solutions.length == 0">
	<table>
	<tr>
		<td>User</td>
		<td>Solution</td>
	</tr>
	<tr ng-repeat="s in solutions">
		<td>{{s.staffName}}</td>
		<td>{{s.solution}}</td>
	</tr>
	</table>
</div>

<form ng-submit="submitSolution()">
<textarea ng-model="solution.solution" id="alternate" placeholder="Write an alternate solution..."></textarea>
<br />
<a class="form-btn" onclick="previewAlternate()">Preview</a>
<input type="submit" value="Post" />
</form>

<br />

<div id="preview-alternate"></div>

<br />

<h1>Comments</h1>
<div ng-show="comments.length == 0">
	<p>No comments.</p>
</div>
<div ng-hide="comments.length == 0">
	<table>
	<tr>
		<td>User</td>
		<td>Comment</td>
	</tr>
	<tr ng-repeat="c in comments">
		<td>{{c.staffName}}</td>
		<td>{{c.comment}}</td>
	</tr>
	</table>
</div>

<form ng-submit="submitComment()">
<textarea ng-model="comment.comment" id="comment" placeholder="Write a comment..."></textarea>
<br />
<a class="form-btn" onclick="previewComment()">Preview</a>
<input type="submit" value="Post" />
</form>

<br />

<div id="preview-comment"></div>
</section>
